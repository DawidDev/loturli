import React from "react";

import styled from "styled-components";

const IncentiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .discounts,
  .last_minute {
    border-radius: 10px;
    height: 300px;
  }

  .discounts {
    background-color: silver;
    flex: 6;
    margin-right: 20px;
    background-color: #426F74;
  }

  .last_minute {
    background-color: #DDCFC2;
    flex: 3;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    .discounts,
    .last_minute {
      width: 100%;
      flex: none;
      margin-bottom: 10px;
    }
  }
`;

const Incentive = () => {
  return (
    <>
      <IncentiveContainer>
        <div className="discounts"></div>
        <div className="last_minute"></div>
      </IncentiveContainer>
    </>
  );
};

export default Incentive;
