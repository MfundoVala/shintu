import styled from "styled-components";
import searchicon from "../assets/search.svg"

const SearchBack = styled.div`
  background-color: transparent;
  height: 3.5rem;
  width: 100%;
  border-radius: 10px;
  border:1.5px solid var(--grey);
  padding: 0.2rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  position: relative;
`;

const SearchImage = styled.div`
    width: 2rem;
    margin-left: 1rem;

    img {
    width: 100%;
    height: auto;
    }

    position: relative;

`;

export const SearchBar  = () => {
    return (
    <SearchBack>
        <SearchImage>
            <img src={searchicon} alt="searchicon" />
        </SearchImage>
    </SearchBack>
    );
  };