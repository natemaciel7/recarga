import * as rechargesRepository from "../respositories/rechargesRepository";
import * as phonesRepository from "../respositories/phonesRepository";

type RechargeInput = {
  phoneId: number;
  value: number;
};

export async function createRecharge(data: RechargeInput) {
  const phone = await phonesRepository.findPhoneById(data.phoneId);
  if (!phone) throw { type: "not_found", message: "Telefone não encontrado" };

  const recharge = await rechargesRepository.createRecharge(data);
  return recharge;
}

export async function getRechargesByNumber(number: string) {
  const phone = await phonesRepository.findPhoneByNumber(number);
  if (!phone) return [];

  const recharges = await rechargesRepository.findRechargesByPhoneId(phone.id);
  return recharges;
}
