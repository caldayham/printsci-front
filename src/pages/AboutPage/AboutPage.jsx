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
          Print Scientific is a manufacturing company, we work to bring our clients the functionl parts and assemblies they need, fast.
          If you need something built, worrying about how each feature will be produced should be a battle you delegate. 
          <br />
          <br />
          For custom parts, Print 
          Scientific listens to the client, distills a manufacturing paradigm for the build, then executes and ships out the part. Depending on the
          size and complexity of the project there will also be consultation, quote, and prototyping steps. 
          We build high-efficiency systems that are the genesis for many crucial
          parts in modern laboratories. Sometimes your product or an equally
          sufficient solution exists, we find it and manipulate it to fit your
          requirements.
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
        <Paragraph>
          Manufacturing medical and research equipment will likely always play
          an important role in our bussinss, that said we want to expand to have
          the capabilities to manufacture and distribute just about any tool at
          both prototype and massive scale. These capabilities will likely be
          manifested in sub-entities, such as PS Containers and PS Electrical.
          <br />
          <br />
          To get to this position we must first build our reputation and
          abilities in our current niche of small-body and low-component
          research equipment. Our team has expertise in CAD, 3D printing, CNC
          milling turning, and polymer casting.
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
