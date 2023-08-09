import { OGM, generate } from "@neo4j/graphql-ogm";
// import { ModelMap } from "./ogm-types"; // this file will be auto-generated using 'generate'
import * as neo4j from "neo4j-driver"
import * as path from "path"
import { readFile } from "fs/promises";

async function bootstrap() {
    const typeDefs = await readFile(path.join(__dirname, "../src/gql/schema.gql"), "utf-8");
    const outFile = path.join(__dirname, "../src/gql/ogm-types.ts");

    const driver = neo4j.driver(
        "bolt://localhost:7687",
        neo4j.auth.basic("neo4j", "password"),
    );

    // Generic is applied on the OGM
    const ogm = new OGM({ typeDefs, driver });

    await generate({
        ogm,
        outFile,
    });

    console.log("Types Generated");

    process.exit(1);
}

bootstrap()