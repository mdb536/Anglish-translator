const a_file = require('./text/A.json');
const b_file = require('./text/B.json');
const c_file = require('./text/C.json');
const d_file = require('./text/D.json');
const e_file = require('./text/E.json');
const f_file = require('./text/F.json');
const g_file = require('./text/G.json');
const h_file = require('./text/H.json');
const i_file = require('./text/I.json');
const j_file = require('./text/J.json');
const k_file = require('./text/K.json');
const l_file = require('./text/L.json');
const m_file = require('./text/M.json');
const n_file = require('./text/N.json');
const o_file = require('./text/O.json');
const p_file = require('./text/P.json');
const q_file = require('./text/Q.json');
const r_file = require('./text/R.json');
const s_file = require('./text/S.json');
const t_file = require('./text/T.json');
const u_file = require('./text/U.json');
const v_file = require('./text/V.json');
const w_file = require('./text/W.json');
const x_file = require('./text/X.json');
const y_file = require('./text/Y.json');
const z_file = require('./text/Z.json');

const contractions = require('./text/contractions.json');
function trim(str){
	let substr = str;
	substr = substr.replace(",", "");
	substr = substr.replace(";", "");
	substr = substr.replace(".", "");
	substr = substr.replace(":", "");
	substr = substr.replace("!", "");
	substr = substr.replace("?", "");
	substr = substr.replace("*", "");

	let nArr = substr.split(" ");
	//first Array.prototype 
	nArr = nArr.map((elem) => elem.toLowerCase());


	//second Array.prototype 
	let newArr = nArr.filter(function (elem, pos) {
   		return nArr.indexOf(elem) == pos;
	})


	return newArr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function findWord(str){
	if(str.charAt(0) == "a"){
			if(a_file.hasOwnProperty(str)){
				const obj = a_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;
			}
			else{
				return str;
			}

	}
	else if(str.charAt(0) == "b"){
		if(b_file.hasOwnProperty(str)){
				const obj = b_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
				return str;
		}
	}
	else if(str.charAt(0) == "c"){
		if(c_file.hasOwnProperty(str)){
				const obj = c_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "d"){
		if(d_file.hasOwnProperty(str)){
				const obj = d_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "e"){
		if(e_file.hasOwnProperty(str)){
			const obj = e_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[0];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[0];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "f"){
		if(f_file.hasOwnProperty(str)){
			const obj = f_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "g"){
		if(g_file.hasOwnProperty(str)){
			const obj = g_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "h"){
		if(h_file.hasOwnProperty(str)){
			const obj = h_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "i"){
		if(i_file.hasOwnProperty(str)){
			const obj = i_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "j"){
		if(j_file.hasOwnProperty(str)){
			const obj = j_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "k"){
		if(k_file.hasOwnProperty(str)){
			const obj = k_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "l"){
		if(l_file.hasOwnProperty(str)){
			const obj = l_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "m"){
		if(m_file.hasOwnProperty(str)){
			const obj = m_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "n"){
		if(n_file.hasOwnProperty(str)){
			const obj = n_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "o"){
		if(o_file.hasOwnProperty(str)){
			const obj = o_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "p"){
		if(p_file.hasOwnProperty(str)){
			const obj = p_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "q"){
		if(q_file.hasOwnProperty(str)){
			const obj = q_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "r"){
		if(r_file.hasOwnProperty(str)){
			const obj = r_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "s"){
		if(s_file.hasOwnProperty(str)){
			const obj = s_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "t"){
		if(t_file.hasOwnProperty(str)){
			const obj = t_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "u"){
		if(u_file.hasOwnProperty(str)){
			const obj = u_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "v"){
		if(v_file.hasOwnProperty(str)){
			const obj = v_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "w"){
		if(w_file.hasOwnProperty(str)){
			const obj = w_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}

	else if(str.charAt(0) == "x"){
		if(x_file.hasOwnProperty(str)){
			const obj = x_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "y"){
		if(y_file.hasOwnProperty(str)){
			const obj = y_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else if(str.charAt(0) == "z"){
		if(z_file.hasOwnProperty(str)){
			const obj = z_file[str];
				if(obj.Class.startsWith("v")){
					if(obj.Attested.length > 0){
						return obj.Attested[getRandomInt(obj.Attested.length)];
					}
					else if(obj.Unattested.length > 0){
						return obj.Unattested[getRandomInt(obj.Unattested.length)];
					}
					else{
						return str;
					}				

				}
				return str;

		}
		else{
			return str;
		}
	}
	else{
		return str;
	}

}

function find(arr){
	let newArr = arr.map(function(elem){
		if(elem.charAt(0) == "a"){
			if(a_file.hasOwnProperty(elem)){
				const obj = a_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}

		}
		else if(elem.charAt(0) == "b"){
			if(b_file.hasOwnProperty(elem)){
				const obj = b_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "c"){
			if(c_file.hasOwnProperty(elem)){
				const obj = c_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "d"){
			if(d_file.hasOwnProperty(elem)){
				const obj = d_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "e"){
			if(e_file.hasOwnProperty(elem)){
				const obj = e_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}		
		}
		else if(elem.charAt(0) == "f"){
			if(f_file.hasOwnProperty(elem)){
				const obj = f_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "g"){
			if(g_file.hasOwnProperty(elem)){
				const obj = g_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "h"){
			if(h_file.hasOwnProperty(elem)){
				const obj = h_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}	
		}
		else if(elem.charAt(0) == "i"){
			if(i_file.hasOwnProperty(elem)){
				const obj = i_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}

		else if(elem.charAt(0) == "j"){
			if(j_file.hasOwnProperty(elem)){
				const obj = j_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}		
		}
		else if(elem.charAt(0) == "k"){
			if(k_file.hasOwnProperty(elem)){
				const obj = k_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}		
		}
		else if(elem.charAt(0) == "l"){
			if(l_file.hasOwnProperty(elem)){
				const obj = l_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "m"){
			if(m_file.hasOwnProperty(elem)){
				const obj = m_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "n"){
			if(n_file.hasOwnProperty(elem)){
				const obj = n_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "o"){
			if(o_file.hasOwnProperty(elem)){
				const obj = o_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "p"){
			if(p_file.hasOwnProperty(elem)){
				const obj = p_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "q"){
			if(q_file.hasOwnProperty(elem)){
				const obj = q_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "r"){
			if(r_file.hasOwnProperty(elem)){
				const obj = r_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "s"){
			if(s_file.hasOwnProperty(elem)){
				const obj = s_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "t"){
			if(t_file.hasOwnProperty(elem)){
				const obj = t_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "u"){
			if(u_file.hasOwnProperty(elem)){
				const obj = u_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else if(elem.charAt(0) == "v"){
			if(v_file.hasOwnProperty(elem)){
				const obj = v_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "w"){
			if(w_file.hasOwnProperty(elem)){
				const obj = w_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "x"){
			if(x_file.hasOwnProperty(elem)){
				const obj = x_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}			
		}
		else if(elem.charAt(0) == "y"){
			if(y_file.hasOwnProperty(elem)){
				const obj = y_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}		
		}
		else if(elem.charAt(0) == "z"){
			if(z_file.hasOwnProperty(elem)){
				const obj = z_file[elem];
				if(obj.Attested.length > 0){
					return obj.Attested[getRandomInt(obj.Attested.length)];
				}
				else if(obj.Unattested.length > 0){
					return obj.Unattested[getRandomInt(obj.Unattested.length)];
				}
				else{
					return elem;
				}
			}
			else{
				return elem;
			}
		}
		else{
			return elem;
		}
	});
	const dictionary = {};
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == "i"){
			dictionary[arr[i]] = "I";
		}
		else{
			dictionary[arr[i]] = newArr[i];
		}
	}
	return dictionary;
}

function checkVerbs(obj){
	for(prop in obj){
		if(prop === obj[prop]){
			console.log(prop);
			if(prop.endsWith("ing")){
				const checkStr = prop.substring(0, prop.length - 3); 
				let search = findWord(checkStr);
				if(search === checkStr){
					search = findWord(checkStr + "e")
					if((search !== checkStr + "e" )){
						obj[prop] = search + "ing";
					}
				}

				else{
					obj[prop] = search + "ing";

				}
			}
			else if(prop.endsWith("ies")){
				const checkStr = prop.substring(0, prop.length - 3) + "y"; 
				let search = findWord(checkStr);
				if(search !== checkStr){
					obj[prop] = search.substring(0, prop.length -1) + "ies"
				}
			}
			else if(prop.endsWith("es")){
				const checkStr = prop.substring(0, prop.length - 2);
				let search = findWord(checkStr);
				if(search !== checkStr){
					obj[prop] = search + "es";
				} 

			}
			else if(prop.endsWith("s")){
				const checkStr = prop.substring(0, prop.length - 1); 
				let search = findWord(checkStr);
				if(search !== checkStr){
					obj[prop] = search + "s";
				} 
			}
			else if(prop.endsWith("ed")){
				const checkStr = prop.substring(0, prop.length - 2);
				let search = findWord(checkStr);
				if(search !== checkStr){
					obj[prop] = search + "ed";
				} 
				else{
					search = findWord(checkStr + "e")
					if(search !== checkStr + "e"){
						if(search.endsWith("e")){
							obj[prop] = search + "d";

						}
						else{
							obj[prop] = search + "ed";
			
						}
					}
				} 

			}

		}
	}
	return obj;
}

function threadBack(str, obj){
	let lowerStr = str.toLowerCase();
	lowerStr = lowerStr + ".";
	for(const prop in obj){
		const key = prop;
		const val = obj[prop];

		lowerStr = lowerStr.replace(key + " ", val + " ");
		lowerStr = lowerStr.replace(key + ":", val + ":");
		lowerStr = lowerStr.replace(key + ".", val + ".");
		lowerStr = lowerStr.replace(key + ",", val + ",");
		lowerStr = lowerStr.replace(key + "!", val + "!");
		lowerStr = lowerStr.replace(key + "?", val + "?");

	}
	lowerStr = lowerStr.substring(0, lowerStr.length - 1); 
	console.log(lowerStr);
	return lowerStr;
}

module.exports = {
	trim: trim,
	find: find,
	checkVerbs: checkVerbs,
	threadBack: threadBack

};

