import { PrismaClient } from '@prisma/client'

const express = require('express')
const bodyParser = require('body-parser')
const port = 5000
const cors = require("cors")

const prisma = new PrismaClient()

const app = express()

app.use(cors())
app.use(express.json())


app.get("/api/expenses", async (req: any, res: any) => {
  const orderBy = req.query.order_by;
  const limit = req.query.limit;
  const expenses = await prisma.expense.findMany(
    { 
      take: limit ? +limit : undefined,
      orderBy: [
        {
          createdAt: orderBy ? orderBy : "desc"
        }

      ],
      include: { user: true, category: true } 
    });
  res.json({
    success: true,
    payload: expenses,
    message: "Getting expenses successful"
  });
});

app.get("/api/categories", async (req: any, res: any) => {
  const categories = await prisma.category.findMany();
  res.json({
    success: true,
    payload: categories,
    message: "Getting categories successful"
  });
});


app.get("/api/users", async (req: any, res: any) => {
  const users = await prisma.user.findMany();
  res.json({
    success: true,
    payload: users,
    message: "Getting users successful"
  });
});

app.delete(`/api/expense/:id`, async (req: any, res: any) => {
  const { id } = req.params
  const expense = await prisma.expense.delete({
      where: { id: Number(id) },
  })
  res.json({
      success: true,
      payload: expense,
  })
})

app.post(`/api/expense`, async (req: any, res: any) => {
  const { name, user, amount, category } = req.body
  const result = await prisma.expense.create({
      data: {
          name,
          user: { 
            connect: { id: Number(user) }
          }, 
          amount,
          category: {
            connect: { id: Number(category)}
          },
      },
      include: {
        user: true,
        category: true
      }
  })
  res.json({
      success: true,
      payload: result,
  })
})

app.put(`/api/expense/:id`, async (req: any, res: any) => {
  const { name, user, amount, category, expenseId } = req.body
  const result = await prisma.expense.update({
    where: {
      id: expenseId
    },
      data: {
          name,
          user: { 
            connect: { id: Number(user) }
          }, 
          amount,
          category: {
            connect: { id: Number(category)}
          }
      },
  })
  res.json({
      success: true,
      payload: result,
  })
})

app.post(`/api/category`, async (req: any, res: any) => {
  const { name } = req.body
  const result = await prisma.category.create({
      data: { name },
  })
  res.json({
      success: true,
      payload: result,
  })
})


app.use((req: any, res: any, next: any) => {
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `API SAYS: Endpoint not found for path: ${req.path}`,
  });
});

app.use((err: any, req: any, res: any, next: any) => {
  return res.json({ errorMessage: err.message });
});


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request: any, response: any) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(port, 'localhost', () => {
    console.log(`App running on port ${port}.`)
  })