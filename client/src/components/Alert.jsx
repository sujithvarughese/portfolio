import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, } from "@chakra-ui/react";
import { useRef } from "react";
import { useGlobalContext } from '../context/GlobalContext.jsx'

function Alert() {
  const { alertState, showAlert, hideAlert } = useGlobalContext()
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={alertState.isOpen}
      leastDestructiveRef={cancelRef}
      onClose={hideAlert}
      motionPreset='slideInBottom'
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={alertState.type === "success" ? '#81C784' : '#FF8A65'}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {alertState.type === "success" ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody>{alertState.message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
