import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/DanielMoliari/5dfd170d5fa395560c7b0baeeb2e937e/raw/65bb477ffeeb1f5a98738a34b0d1d60a6e3493d3/categorias-ingredientes.json');
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}