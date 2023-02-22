import styled from 'styled-components'

export const Container = styled.div`
  margin: 2rem auto;
  width: 75%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  main {
    padding: 2.5rem;
  }
`
