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

export const timeToSecondsConverter = (qt: number, type: 'minutes' | 'hours' | 'days' | 'weeks'): number => {
  switch (type) {
    case 'minutes':
      return qt * 60;
    case 'hours':
      return qt * 60 * 60;
    case 'days':
      return qt * 60 * 60 * 24;
    case 'weeks':
      return qt * 60 * 60 * 24 * 7;
  }
}
