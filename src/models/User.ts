import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

/**
 * Return all unique value types of T.
 */
type ValueOf<T> = T[keyof T];

const UserType = Object.freeze({
  ADMIN: "admin",
  CUSTOMER: "customer",
} as const);

type Props = {
  type: ValueOf<typeof UserType>;
};

@Entity()
export class User {
  constructor(props: Props) {
    this.type = props.type;
  }

  @PrimaryKey()
  id!: number;

  @Property()
  type: ValueOf<typeof UserType>;
}
