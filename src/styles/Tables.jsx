import { styled } from "styled-components";
import { bodyColors } from "./global";

const TableWrapper = styled.div`
  margin: 20px 10px;
  overflow: auto;
`;

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border-collapse: collapse;
  > tbody,
  thead {
    > tr {
      margin-bottom: 10px;
      text-align: center;
      color: ${bodyColors.mainTextColor};
      background-color: ${bodyColors.mainBlockBackgroundColor};
      border-bottom: 2px ${bodyColors.bodyBackgroundColor} solid;
      > td {
        #flex: 1 1;
        padding: 15px 30px;
      }
    }
  }
`;

export { Table, TableWrapper };
