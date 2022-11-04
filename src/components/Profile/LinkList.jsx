import LinkItems from "./LinkItems";

const LinkList = () => {
  return (
    <section>
      <LinkItems name="Twitter Link" link="https://twitter.com/PraiseTheDev" />
      <LinkItems
        name="Zuri Team"
        link="https://training.zuri.team/"
        id="btn__zuri"
      />
      <LinkItems
        name="Zuri Books"
        link="http://books.zuri.team"
        id="books"
        sub="Books to help boost your design & coding skills"
      />
      <LinkItems
        name="Python Books"
        link="https://books.zuri.team/python-for-beginners?ref_id=praise"
        id="book__python"
        sub="Use this link to get a discount of 20% off your first 5 purchases"
      />
      <LinkItems
        name="Background Check for Coders"
        link="https://background.zuri.team"
        id="pitch"
        sub="Want to verify whether that applicant/employee is as good as they claim to be? Click here"
      />
      <LinkItems
        name="Design Books"
        link="https://books.zuri.team/design-rules"
        id="book__design"
        sub="The only book you'll ever need to learn about design. From basic to advanced concepts and more, all for $0"
      />
      <LinkItems
        name="Contact Me"
        link="/contact"
        id="contact"
        sub="Get in touch with me"
      />
    </section>
  );
};

export default LinkList;
