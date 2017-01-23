# Notes
* Contribute tests to the __tests folder
* Compile the tests (See https://github.com/junit-team/junit4/wiki/Getting-started)
* Sample request:
```
POST http://54.255.179.180/api/test

user_id: 123
activity_no: basic-java/CalculatorTest
github_repo: https://github.com/ToanNG/java-solutions
```
* Sample response:
```
JUnit version 4.12
.E
Time: 0.02
There was 1 failure:
1) sayName(HelloTest)
org.junit.ComparisonFailure: expected:<Hello, world[!]> but was:<Hello, world[]>
	at org.junit.Assert.assertEquals(Assert.java:115)
  ...

FAILURES!!!
Tests run: 1,  Failures: 1
```
* activity_no should be the path to the test class file. Eg: basic-java/CalculatorTest
* Students must **compile** the answer before pushing to git
