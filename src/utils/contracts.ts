import { ethers } from 'ethers';
import { contractABI } from './abi';

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const rpcUrl = import.meta.env.VITE_RPC_URL;

// Check if environment variables are loaded
if (!contractAddress || !ethers.isAddress(contractAddress)) {
  console.error('❌ Error: Invalid `VITE_CONTRACT_ADDRESS`:', contractAddress);
  throw new Error('❌ Invalid contract address!');
}

if (!rpcUrl) {
  console.error('❌ Error: `VITE_RPC_URL` is not set!');
  throw new Error('❌ RPC URL not found!');
}

// Function to get contract with `signer`
export async function getContract(provider: any, account: string) {
  if (!provider) throw new Error('❌ Error: Provider not passed!');

  const signer = await provider.getSigner();
  console.log('🔍 Signer obtained:', signer);

  return new ethers.Contract(contractAddress, contractABI, signer);
}

// Start game
export async function startGame(
  account: string,
  provider: any,
): Promise<string | undefined> {
  try {
    const contract = await getContract(provider, account);
    console.log('📢 Calling startGame...');
    const tx = await contract.startGame();
    await tx.wait();
    console.log('✅ Game started! TX:', tx.hash);
    return tx.hash;
  } catch (error) {
    console.error('❌ Error starting game:', error);
  }
}

// Request cell reveal
export async function requestCellReveal(
  account: string,
  provider: any,
  x: number,
  y: number,
): Promise<string | undefined> {
  try {
    const contract = await getContract(provider, account);
    console.log(`📢 Requesting cell reveal: (${x}, ${y})`);
    const tx = await contract.requestCellReveal(x, y);
    await tx.wait();
    console.log('✅ Cell revealed! TX:', tx.hash);
    return tx.hash;
  } catch (error) {
    console.error('❌ Error requesting cell reveal:', error);
  }
}

// Subscribe to events
export async function listenToEvents(
  updateGameState: (x: number, y: number, value: number) => void,
  onGameEnd: (win: boolean) => void,
) {
  const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);
  const contract = new ethers.Contract(
    import.meta.env.VITE_CONTRACT_ADDRESS,
    contractABI,
    provider,
  );

  console.log('🔍 Available events:', contract.filters);

  contract.on(contract.filters.CellRevealed(), (player, x, y, value) => {
    console.log(`📢 Event CellRevealed: (${x}, ${y}), value: ${value}`);

    if (x === undefined || y === undefined || value === undefined) {
      console.error('❌ Error: CellRevealed passed `undefined` values!');
      return;
    }

    updateGameState(Number(x), Number(y), Number(value));
  });

  contract.on(contract.filters.GameLost(), (player) => {
    console.log('💥 Player lost!');
    onGameEnd(false);
  });

  contract.on(contract.filters.GameWon(), (player) => {
    console.log('🎉 Player won!');
    onGameEnd(true);
  });
}
