import Container from '@mui/material/Container';
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container maxWidth={window.innerWidth < 700 ? "lg" : "md"}>
        <div className={styles.top}>
          <p>Join the Contio Community!</p>
          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your e-mail id" />
            <button>SUBSCRIBE NOW</button>
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <div className={styles.contact}>
            <h4>CONTACT US</h4>
            <div>General Enquiry</div>
            <div>Phone : 18001801080</div>
            <div>Email : info@contio.org</div>
          </div>
          <div className={styles.about}>
            <h4>About Us</h4>
            <p>Team</p>
            <p>Career</p>
            <p>Blog</p>
            <p>2020 Highlights</p>
          </div>
          <div className={styles.learn}>
            <h4>LEARN</h4>
            <p>How Contio Works </p>
            <p>Success Stories </p>
            <p>Frequently Asked Questions </p>
          </div>
          <div className={styles.category}>
            <h4>TOP CATEGORIES</h4>
            <p>States</p>
            <p>Online Classes</p>
            <p>All Subjects</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
