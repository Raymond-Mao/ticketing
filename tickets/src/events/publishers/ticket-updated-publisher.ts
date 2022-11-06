import { Publisher, Subjects, TicketUpdatedEvent } from "@arale-auth/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
