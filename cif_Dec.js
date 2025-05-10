
import java.util.Scanner;

public class CifraDeCesar {

    public static String cifraDeCesar(String texto, int deslocamento) {
        StringBuilder resultado = new StringBuilder();

        for (char charAt : texto.toCharArray()) {
            if (Character.isUpperCase(charAt)) {
                resultado.append((char) ((charAt - 'A' + deslocamento + 26) % 26 + 'A'));
            } else if (Character.isLowerCase(charAt)) {
                resultado.append((char) ((charAt - 'a' + deslocamento + 26) % 26 + 'a'));
            } else {
                resultado.append(charAt);
            }
        }

        return resultado.toString();
    }

    public static String decifraDeCesar(String texto, int deslocamento) {
        // Para decifrar, usamos o deslocamento negativo
        return cifraDeCesar(texto, -deslocamento);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Você deseja (1) criptografar ou (2) decifrar? (Digite 1 ou 2): ");
        String escolha = scanner.nextLine();
        System.out.print("Digite o texto: ");
        String texto = scanner.nextLine();
        System.out.print("Digite o deslocamento (número inteiro): ");
        int deslocamento = scanner.nextInt();

        if (escolha.equals("1")) {
            String textoCriptografado = cifraDeCesar(texto, deslocamento);
            System.out.println("Texto criptografado: " + textoCriptografado);
        } else if (escolha.equals("2")) {
            String textoDecifrado = decifraDeCesar(texto, deslocamento);
            System.out.println("Texto decifrado: " + textoDecifrado);
        } else {
            System.out.println("Escolha inválida. Por favor, digite 1 ou 2.");
        }

        scanner.close();
    }
}
