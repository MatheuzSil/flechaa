export const formatMedicalConditions = (conditions: string[]): string => {
  if (conditions.length > 1){
    return conditions.map((condition, index) => {
      const isLast = index === conditions.length - 1;
      return isLast ? `${condition}.` : `${condition}, `;
    }).join('');
  }
  else {
    return "Nenhuma Condição Médica Adicional"
  }
}

export const fetcher = (url: string) => fetch(url).then(res => res.json());
