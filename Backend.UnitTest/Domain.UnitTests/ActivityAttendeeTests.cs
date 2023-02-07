using Domain;

namespace Backend.UnitTest.Domain.UnitTests;
using NUnit.Framework;

[TestFixture]
public class ActivityAttendeeTests
{
    
    private static IEnumerable<TestCaseData> TestCases()
    {
        // "Test with appUserId = user123 and isHost = true", "This test case tests the scenario where the attendee is a host."
        yield return new TestCaseData("user123", true);
        // "Test with appUserId = user456 and isHost = false", "This test case tests the scenario where the attendee is not a host."
        yield return new TestCaseData("user456", false);
        // "Test with appUserId = user789 and isHost = true", "This test case tests another scenario where the attendee is a host."
        yield return new TestCaseData("user789", true);
        // "Test with appUserId = user321 and isHost = false", "This test case tests another scenario where the attendee is not a host."
        yield return new TestCaseData("user321", false);
        // "Test with appUserId = empty string and isHost = true", "This test case tests the scenario where the attendee has an empty appUserId and is a host."
        yield return new TestCaseData("", true);
        // "Test with appUserId = empty string and isHost = false", "This test case tests the scenario where the attendee has an empty appUserId and is not a host."
        yield return new TestCaseData("", false);
        // "Test with appUserId = null and isHost = true",  "This test case tests the scenario where the attendee has a null appUserId and is a host."
        yield return new TestCaseData(null, true);
        // "Test with appUserId = null and isHost = false", "This test case tests the scenario where the attendee has a null appUserId and is not a host."
        yield return new TestCaseData(null, false);
        // "Test with appUserId = user999 and isHost = false", "This test case tests the scenario where the attendee has a incorrect isHost value."
        yield return new TestCaseData("user999", true);
        // "Test with appUserId = user000 and isHost = true", "This test case tests the scenario where the attendee has a incorrect isHost value."
        yield return new TestCaseData("user000", false);
    }
    
    private class SetProperties
    {

        public ActivityAttendee attendee;

        public SetProperties(string appUserId, bool isHost)
        {
            attendee = new ActivityAttendee
            {
                AppUserId = appUserId,
                AppUser = new AppUser(),
                ActivityId = Guid.NewGuid(),
                Activity = new Activity(),
                IsHost = isHost
            };
        }
    }
    
    // A good example of why stacking different getter test is bad (uncomment)
    
    // [Test, TestCaseSource(nameof(TestCases))]
    // public void Test_ActivityAttendeeProperties_ShouldBeSetCorrectly(string appUserId, bool isHost)
    // {
    //     // Arrange
    //     var attendee = new ActivityAttendee
    //     {
    //         AppUserId = appUserId,
    //         AppUser = new AppUser(),
    //         ActivityId = Guid.NewGuid(),
    //         Activity = new Activity(),
    //         IsHost = isHost
    //     };
    //
    //     // Act
    //     var resultAppUserId = attendee.AppUserId;
    //     var resultAppUser = attendee.AppUser;
    //     var resultActivityId = attendee.ActivityId;
    //     var resultActivity = attendee.Activity;
    //     var resultIsHost = attendee.IsHost;
    //
    //     // Assert
    //     Assert.AreEqual(appUserId, resultAppUserId);
    //     Assert.IsNotNull(resultActivityId);
    //     // Issue is here (Should be IsNotNull)
    //     Assert.IsNull(resultActivity);
    //     Assert.IsNotNull(resultAppUser);
    //     Assert.AreEqual(isHost, resultIsHost);
    // }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Test_AppUserId_ShouldBeSetCorrectly(string appUserId, bool isHost)
    {
        // Arrange
        var testProperties = new SetProperties(appUserId, isHost);
        var attendee = testProperties.attendee;
    
        // Act
        var resultAppUserId = attendee.AppUserId;
        
        // Assert
        Assert.AreEqual(appUserId, resultAppUserId);
    }
    
    [Test, TestCaseSource(nameof(TestCases))]
    public void Test_AppUser_ShouldBeSetCorrectly(string appUserId, bool isHost)
    {
        // Arrange
        var testProperties = new SetProperties(appUserId, isHost);
        var attendee = testProperties.attendee;

        // Act
        var resultAppUser = attendee.AppUser;
        
        // Assert
        Assert.NotNull(resultAppUser);
        
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Test_ActivityId_ShouldBeSetCorrectly(string appUserId, bool isHost)
    {
        // Arrange
        var testProperties = new SetProperties(appUserId, isHost);
        var attendee = testProperties.attendee;
    
        // Act
        var resultActivityId = attendee.ActivityId;
    
        // Assert
        Assert.IsNotNull(resultActivityId);
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Test_Activity_ShouldBeSetCorrectly(string appUserId, bool isHost)
    {
        // Arrange
        var testProperties = new SetProperties(appUserId, isHost);
        var attendee = testProperties.attendee;

        // Act
        var resultActivity = attendee.Activity;

        // Assert
        Assert.IsNotNull(resultActivity);
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Test_IsHost_ShouldBeSetCorrectly(string appUserId, bool isHost)
    {
        // Arrange
        var testProperties = new SetProperties(appUserId, isHost);
        var attendee = testProperties.attendee;
    
        // Act
        var resultIsHost = attendee.IsHost;
    
        // Assert
        Assert.AreEqual(isHost, resultIsHost);
    }

}
