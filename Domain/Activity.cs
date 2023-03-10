using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    
    /*
     * Will be tested with a unit test.
     */
    
    public class Activity
    {

        public Guid Id { get; set; }

        public string? Title { get; set; }

        public DateTime Date { get; set; }

        public string? Description { get; set; }

        public string? Category { get; set; }

        public bool IsCancelled { get; set; }
        public ICollection<ActivityAttendee> Attendees { get; set; } = new List<ActivityAttendee>();

    }
}