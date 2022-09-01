import React, { useEffect } from "react";
import {
  Subtitle,
  Paragraph,
  MainContainer,
  Title,
  PageSection,
} from "../../tools/globalStyles";
import Members from "../../components/Members/Members";
import { useDispatch } from "react-redux"; 
import { changePage } from "../../redux/currentPageRedux";

const AboutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("about"));
    };
    updatePage();
  });

  return (
    <MainContainer flexDirection={"column"}>
      <Title>About Us</Title>
      <img src={process.env.REACT_APP_IMGURL + "parts.png"} alt="banner" />
      <PageSection>
        <Subtitle>What we do</Subtitle>
        <br />
        <Paragraph width={"50vw"}>
          Print Scientific is a manufacturing company, we work to bring our clients the functional parts and assemblies they need, fast.
          Our process is supported by three pillars; function, simplicity, and cost.
          <br />
          <br />
          To us, function is a sum of a products extensibility, compatibility, and productivity. Simplicity and cost often go hand in hand, needless to say we don't make 
          or suggest unnecessary features.

          For custom parts, Print Scientific meets with the client, distills a manufacturing paradigm for the build, 
          then executes and ships out the part. There may also be consultation, quote, and prototyping steps for larger projects. 
          <br />
          <br />
          Print Scientific aims to be a highly extensible and user-friendly manufacturing API.
        </Paragraph>
      </PageSection>
      <PageSection>
        <Subtitle>Meet the team!</Subtitle>
        <Members />
      </PageSection>
      <PageSection>
        <Subtitle>Where we're going</Subtitle>
        <br />
        <Paragraph width={"50vw"}>
          Manufacturing medical and research equipment will likely always play
          an important role in our business, additionally we want to expand to have
          the capabilities to manufacture and distribute many parts, both medical and other, at extreme scale. 
          <br />
          <br />
          To get to this position we are demonstrating our 
          abilities in the niche of small-body and low-component custom
          research equipment. As we build our client relation and revenue we will begin to deploy new projects to scale our capabilities such as with aluminum die casting and injection molding.
          Our team has expertise in CAD, CAM, and simulation, FDM / SLA / SLS 3D printing, CNC / gcode, and plastics molding.
        </Paragraph>
      </PageSection>
      <PageSection>
        <Subtitle>Contact us</Subtitle>
      </PageSection>
      <PageSection borderBottom={false}>
        <Subtitle>Other helpful things</Subtitle>
        <br />
        <Paragraph>
          Read our <u>Privacy Policy</u>
        </Paragraph>
        <Paragraph>

          Read our <u>Terms of Service</u>
        </Paragraph>
        <Paragraph>
          Read our <u>Return Polic</u>
        </Paragraph>
        <Paragraph>
          Browse the <u>Catalog</u>
        </Paragraph>
      </PageSection>
    </MainContainer>
  );
};

export default AboutPage;
