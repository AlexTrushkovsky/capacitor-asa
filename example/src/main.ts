import './style.css';
import { ASAIDPlugin } from 'capacitor-asa';

const asaId = document.getElementById('txt-asa-id')!;
const btnPrompt = document.getElementById('btn-prompt-asa-id')!;

const prompt = async () => {
  const token = await ASAIDPlugin.getASAID();
  asaId.innerText = token;
};

btnPrompt.onclick = (_: MouseEvent) => {
  prompt();
};
