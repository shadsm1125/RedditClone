import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { type } from "os";

@Entity() 
export class Post {
    @PrimaryKey()
    id!: number;

    @Property()
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date()})
    updatedAt = new Date();

    @Property({type: "text"})
    title!: string;
}