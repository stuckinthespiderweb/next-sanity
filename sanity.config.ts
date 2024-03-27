import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './sanity/schemas'

const config = defineConfig({
projectId: "uao7kc1l",
dataset: "production",
title: "My Personal Website",
apiVersion: "2024-03-27",
basePath: "/admin",
plugins: [structureTool()],
schema: { types: schemas}
})

export default config




