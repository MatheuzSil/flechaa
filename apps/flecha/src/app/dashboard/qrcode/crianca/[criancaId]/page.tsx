'use client'
import { Title } from "@meu-workspace/safira";
import { ModalCard } from "apps/flecha/src/Containers/ModalCard/ModalCard";
import { useChildModal } from "apps/flecha/src/graphql/hooks/useChildModal";
import { useParams } from "next/navigation";



export default function Page() {
  const { criancaId } = useParams()
  const { data } = useChildModal(typeof criancaId === 'string' ? criancaId : '')
  const childInfo = data?.getChildModal

  return (
    <div style={{ width: "100%", height: "100vh", padding: '20px 0' }}>
      <Title $textAlign="center" $fontColor="#fff" >Informações da Criança</Title>
      {childInfo && (
        <ModalCard
          childInfo={{
            name: childInfo.name,
            age: childInfo.age,
            id: childInfo.id,
            class: childInfo.class,
          }}
          onClose={() => {}}
        />
      )}
    </div>
  );
}