import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class HelloTest {
  @Test
  public void sayName() {
    Hello hello = new Hello();
    String sentence1 = hello.say("Toan");
    String sentence2 = hello.say();
    assertEquals("Hello, Toan!", sentence1);
    assertEquals("Hello, world!", sentence2);
  }
}
