namespace Flights.ReadModels
{
    public record FlightRm(
        Guid Id,
        string Airline,
        string Price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int RemainingNumberOfSeats
        );

}
