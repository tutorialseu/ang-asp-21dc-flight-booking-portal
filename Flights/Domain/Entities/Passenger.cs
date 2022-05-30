namespace Flights.Domain.Entities
{
    public record Passenger(
        string Email,
        string FirstName,
        string LastName,
        bool Gender);
}
