import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class BookCartTest {
  @Test
  public void evaluatesExpression() {
    BookCart cart = new BookCart();
    assertEquals(2, cart.bukuBiografi);
    assertEquals(1, cart.bukuMajalah);
    assertEquals(2, cart.bukuNovel);
    assertEquals(4, cart.bukuEnsiklopedia);
    assertEquals(3, cart.bukuKomik);
  }
}
