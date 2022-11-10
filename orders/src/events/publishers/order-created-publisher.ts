import { Publisher, OrderCreatedEvent, Subjects } from "@arale-auth/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
