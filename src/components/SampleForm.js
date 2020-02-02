import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import Row from "../styles/Row";
import Section from "../styles/Section";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    border: 1px solid #555;
  }
  textarea {
    border: 1px solid #555;
  }
`;

const SampleForm = props => {
  let { fetching, onSubmit, onGuid, updateGUIDAjaxThunk } = props;

  return (
    <Section border={true}>
      <StyledForm onSubmit={onSubmit}>
        <div>
          <Row>
            <Button disabled={fetching} onClick={updateGUIDAjaxThunk}>
              {/* <Button disabled={fetching} onClick={onGuid}> */}
              REST Call guid
            </Button>
          </Row>
        </div>
      </StyledForm>
    </Section>
  );
};
SampleForm.propTypes = {
  fetching: PropTypes.bool
};

export default SampleForm;
