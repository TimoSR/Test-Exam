using Microsoft.AspNetCore.Identity;
using Moq;
using NUnit.Framework;
using Domain;

namespace Backend.UnitTest.Domain.UnitTests;

[TestFixture]
public class AppUserTests
{
    private AppUser _appUser;

    [SetUp]
    public void SetUp()
    {
        _appUser = new AppUser
        {
            DisplayName = "John Doe",
            Bio = "I am a software developer",
            Activities = new List<ActivityAttendee>()
        };
    }

    [Test]
    public void AppUser_Properties_ShouldBeSet()
    {
        // Assert
        Assert.AreEqual("John Doe", _appUser.DisplayName);
        Assert.AreEqual("I am a software developer", _appUser.Bio);
        Assert.AreEqual(0, _appUser.Activities.Count);
    }
}