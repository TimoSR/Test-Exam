using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    
    /*
     * Will be tested with integration tests as IdentityUser is part of
     * the of the .Net Core IdentityUser library. 
     */
    
    public class AppUser : IdentityUser
    {
        public string? DisplayName { get; set; }
        public string? Bio { get; set; }
        public ICollection<ActivityAttendee>? Activities { get; set; }

    }
}