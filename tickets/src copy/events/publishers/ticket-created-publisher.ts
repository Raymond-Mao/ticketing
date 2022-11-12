import { Publisher, Subjects, TicketCreatedEvent } from "@arale-auth/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
