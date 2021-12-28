import db from "./index"

const seed = async () => {
  const project = await db.project.create({ data: { name: "FooBar" } })

  for (let i = 0; i < 5; i++) {
    await db.task.create({
      data: {
        name: `Task: ${i}`,
        project: {
          connect: {
            id: project.id,
          },
        },
      },
    })
  }
}

export default seed
