import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-body {
    padding: 16px;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  .card-content {
    font-size: 1rem;
    color: #555;
  }

  .card-footer {
    padding: 10px;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
  }
`;
