import { MikroORM, Options } from "@mikro-orm/core";
import { Migrator } from "@mikro-orm/migrations";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import path from "node:path";
import { User } from "./models/User";

const config: Options<PostgreSqlDriver> = {
  metadataProvider: TsMorphMetadataProvider,
  driver: PostgreSqlDriver,
  extensions: [Migrator],
  user: "postgres",
  password: "postgres",
  dbName: "postgres",
  host: "localhost",
  port: 5432,
  entities: [User],
  debug: false,
};

async function main() {
  const orm = await MikroORM.init<PostgreSqlDriver>(config);

  console.log("INFO - Refreshing database...");

  // The following line will throw a SyntaxErrorException
  // if we use @mikro-orm/*@6.2.8. All versions below v6.2.8 work fine.
  await orm.schema.refreshDatabase();

  console.log("INFO - Refreshed database.");
}

main()
  .then(() => process.exit())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
