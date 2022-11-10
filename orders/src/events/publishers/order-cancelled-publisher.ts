import { Subjects, Publisher, OrderCancelledEvent } from "@arale-auth/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
