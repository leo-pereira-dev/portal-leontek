import Vue from 'vue';

export function showToast(message, toastify, isError = "Sucesso") {
  const toast = toastify({
    text: message,
    duration: 5000, // 5 seconds
    close: true, // Show close button
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    style: {
      background: isError == "Erro" ? "#FF0000" : "linear-gradient(to right, #10B47D, #3E7C08)"
    },
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} // Callback after click
  });

  toast.showToast();

  const progressBar = document.createElement('div');
  progressBar.className = 'toastify-progress-bar';
  progressBar.style.animationDuration = toast.options.duration + 'ms';
  toast.toastElement.appendChild(progressBar);
}

Vue.prototype.$showToast = showToast;
