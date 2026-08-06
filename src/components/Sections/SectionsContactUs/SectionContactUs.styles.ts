import styled from 'styled-components';

export const Container = styled.section`padding: .5rem 1.5rem 1.25rem;`;
export const Content = styled.div`
  width: 100%; max-width: 1160px; margin: 0 auto; display: grid;
  grid-template-columns: minmax(300px, .38fr) minmax(0, .62fr); align-items: start; gap: clamp(1.5rem, 3.2vw, 3rem);
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 1.25rem; }
  @media (max-width: 600px) { gap: 1rem; }
`;
export const InfoArea = styled.div`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.lightPrimary}); border-radius: 18px;
  padding: clamp(1.4rem, 2.5vw, 2rem); color: #fff; box-shadow: 0 14px 28px rgba(26,46,74,.16);
  h2 { font-size: clamp(1.45rem, 2vw, 1.85rem); line-height: 1.2; margin-bottom: .75rem; }
  > div > p { line-height: 1.55; color: #e7f1fb; }
  .contact { margin-top: 1.35rem; }
  .contact > div { display: flex; flex-direction: column; gap: .8rem; }
  .contact-link { display: flex; align-items: center; gap: .7rem; min-height: 48px; background: rgba(255,255,255,.1); padding: .78rem .9rem; border: 1px solid transparent; border-radius: 10px; color: #fff; text-decoration: none; cursor: pointer; transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease, border-color .2s ease; }
  .contact-link:hover { transform: translateY(-2px); background: rgba(255,255,255,.17); border-color: rgba(255,255,255,.22); box-shadow: 0 7px 16px rgba(0,0,0,.14); }
  .contact-link:focus-visible { outline: 3px solid #8ee3b2; outline-offset: 3px; }
  .contact svg { flex: 0 0 auto; font-size: 18px; }
  .contact span { display: grid; gap: .05rem; font-weight: 600; min-width: 0; overflow-wrap: anywhere; }
  .contact small { font-size: .74rem; font-weight: 500; opacity: .8; }
  .coverage { display: block; margin-top: 1.15rem; color: #d9e9f7; }
  @media (max-width: 900px) { padding: 1.5rem; }
  @media (min-width: 1024px) and (max-height: 850px) {
    padding: 1.5rem;
    .contact { margin-top: 1.2rem; }
    .contact > div { gap: .7rem; }
    .contact-link { padding: .72rem .85rem; }
    .coverage { margin-top: 1rem; }
  }
`;
export const FormWrapper = styled.div`display: flex; justify-content: center; width: 100%;`;
