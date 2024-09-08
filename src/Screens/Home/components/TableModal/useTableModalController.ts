import { useState } from "react";

export function useTableModalController(onSave: (table: string) => void, onCloseTableModal: () => void) {
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onCloseTableModal();
  }
  return {
    table,
    setTable,
    handleSave,
  };
}
