import { useState } from "react";

export function useHomeController() {
  const [isTabeModalVisible, setisTabeModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  function handleOpenTableModal() {
    setisTabeModalVisible(true);
  };

  function handleCloseTableModal() {
    setisTabeModalVisible(false);
  };

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    handleCloseTableModal();
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return {
    isTabeModalVisible,
    handleOpenTableModal,
    handleCloseTableModal,
    selectedTable,
    handleSaveTable,
    handleCancelOrder,
  };
};
