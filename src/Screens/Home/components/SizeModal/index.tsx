import { Modal, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { Text } from "../../../../components/Text";

import { Form, Header, ModalBody, Overlay } from "./styles";
import { Close } from "../../../../components/Icons/Close";

interface SizeModalProps {
  visible: boolean;
  selectedSize: string;
  onSelectSize(itemValue: string): void;
  onCloseSizeModal(): void;
}

export function SizeModal({ visible, onCloseSizeModal, selectedSize, onSelectSize }: SizeModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <Overlay>
        <ModalBody>
          <Header>
            <Text weight="600">Selecione o tamanho</Text>

            <TouchableOpacity onPress={onCloseSizeModal}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Picker
              selectedValue={selectedSize}
              onValueChange={(itemValue, itemIndex) => onSelectSize(itemValue)}
            >
              <Picker.Item label="Pequeno" value="SMALL" />
              <Picker.Item label="Médio" value="MEAN" />
              <Picker.Item label="Grande" value="LARGE" />
            </Picker>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
