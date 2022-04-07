export type SegmentsType = {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
};

export type TicketType = {
  price: number;
  carrier: string;
  segments: SegmentsType[];
};
