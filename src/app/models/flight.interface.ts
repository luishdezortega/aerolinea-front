
 export interface FlightInterface {
    id: number;
    price: number;
    trayecto: {
        id: number;
        originCity: string;
        destinationCity: string;
        dateExit: number;
        dateArrival: number;
    };
    avion: {
        id: number;
        numSerie: string;
        numSillas: number;
    };
}
