import { toast } from 'react-toastify';

const useSnackbar = () => {
  function enqueueSnackbar(message, options) {
    return toast[options.variant ?? 'default'](message, {
      theme: 'light',
      icon: options.icon,
    });
  }
  return { enqueueSnackbar };
};

export default useSnackbar;
