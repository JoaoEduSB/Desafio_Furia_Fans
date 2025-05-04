const startCamera = document.getElementById('startCamera');
const video = document.getElementById('video');
const takePhoto = document.getElementById('takePhoto');
const canvas = document.getElementById('canvas');
const continueForm = document.getElementById('continueForm');

let stream;

startCamera.addEventListener('click', async () => {
  stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  video.classList.remove('hidden');
  takePhoto.classList.remove('hidden');
  startCamera.classList.add('hidden');
});

takePhoto.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.classList.remove('hidden');
  video.classList.add('hidden');
  takePhoto.classList.add('hidden');
  stream.getTracks().forEach(track => track.stop());

  // Simula o "processamento da IA"
  setTimeout(() => {
    continueForm.classList.remove('hidden');
  }, 1500);
});