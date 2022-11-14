import { Subjects, Publisher, PaymentCreatedEvent } from "@arale-auth/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
