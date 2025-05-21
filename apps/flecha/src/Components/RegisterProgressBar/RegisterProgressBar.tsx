import { useParentRegisterPhase } from '../../store/store';
import * as S from './RegisterProgressBar.styles';

export const RegisterProgressBar = () => {
  const phase = useParentRegisterPhase((state) => state.phase);
  const setPhase = useParentRegisterPhase((state) => state.setPhase);
  const steps = [
    { label: '1. Informações de cadastro' },
    { label: '2. Informações de Contato' },
    { label: '3. Informações para Verificação' },
  ];

  return(
    <>
      <S.FormProgressBarContainer>
          <S.FormProgressBarWrapper>
            <S.ProgressWrapper>
              {steps.map((step, index) => (
                <S.ProgressCard key={index + 1} onClick={() => setPhase(index + 1)}>
                  <S.FormProgressBarLabel>{step.label}</S.FormProgressBarLabel>
                  <S.ProgressBar
                    key={index + 1}
                    index={index + 1}
                    total={steps.length}
                    phase={phase}
                  />
                </S.ProgressCard>
              ))}
            </S.ProgressWrapper>
          </S.FormProgressBarWrapper>
      </S.FormProgressBarContainer>
    </>
  )
}