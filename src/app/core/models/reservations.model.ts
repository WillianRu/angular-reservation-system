export interface ReservationsModel {
  id: number;
    movie: {
        id: number;
        name: string;
        genre: string;
        movieLengthMinutes: number;
    };
    userAccount: {
        id: number;
        name: string;
        phoneNumber: number;
        email: string;
        password: string;
        enable: boolean;
    };
    reservationDate: string;
    seatsNumber: number;
}
